import React from 'react';

export default class Form extends React.Component {

   state = { 
        feedback: '', 
        name: '',
        email: '',
        reply:'' 
        };
	
  name = (e) => {
    this.setState({
        name: e.target.value
    })
  }

  email = (e) => {
    this.setState({
        email: e.target.value
    })
  }

  feedback = (e) => {
      this.setState({
          feedback: e.target.value
      })
  }

  clearReply = () => {
      this.setState({
          reply:''
      })
  }

  sendFeedback = (templateId, variables)=> {
    window.emailjs.send(
      'gmailEm', templateId,
      variables
      ).then(res => {
        this.setState({
            reply: 'Message successfully sent!'
        })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const templateId = 'template_dDVzZKSk';
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      this.setState({
          feedback:'',
          name:'',
          email:''
      })
  }

  render() {
	return (
      <form className="test-mailing" style={{display:'flex', flexDirection:"column", 
      justifyContent:"center",
      alignItems:"center",
      marginBottom:'5%'
      }}>
    	<h2 className="contact-heading" style={{color:'green', textAlign:'center'}}>Send us an enquiry and one of our friendly staff</h2>
        <h2 className="contact-heading" style={{marginTop:'0px'}}>  will get back to you with a quote:</h2>
        <div style={{width:'40%'}}>
            <input type='text'
            className="input"
            style={{width:'100%', marginBottom:"2%", padding:'1%', borderRadius:'20px', outline:'none',
            backgroundColor:'#fafafa'
        }}
            placeholder="enter your name"
            required
            onChange={this.name}
            value={this.state.name}
            />
        </div>

        <div style={{width:'40%'}}>
            <input type='email'
            className="input"
            style={{width:'100%', marginBottom:"2%", padding:'1%', borderRadius:'20px', outline:'none',
            backgroundColor:'#fafafa'
        }}
            placeholder="enter your email"
            required
            onChange={this.email}
            value={this.state.email}
            />
        </div>

    	<div style={{width:'40%'}} id="test-mailing-container">
        
      	<textarea
            className="input"
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.feedback}
        	placeholder="Type your message here"
        	required
            value={this.state.feedback}
            spellCheck="false"
            style={{
                width: '100%', height: '100px',
                marginBottom:'4%', padding:'2%', 
                borderRadius:'20px',
                outline:'none',
                backgroundColor:'#fafafa'
        }}
      	/>
    	</div>
    	<div>
        <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} 
        style={{marginBottom:'4%'}}
        />
        </div>
        { this.state.reply &&
            <div style={{color:'green', fontSize:'22px', marginTop:'1%'}}>
            {this.state.reply}  {' '}
            <span
            onClick={()=> this.clearReply()}
            style={{border:'solid 1px teal', backgroundColor:'teal', color:'white', cursor:'pointer'}}> ok </span>
        </div>
        }
  	</form>
	)
  }
}