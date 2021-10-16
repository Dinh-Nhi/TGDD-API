import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Seach extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          keyword: '',
          redirect: false
        };
    
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
      // mỗi khi nhấn nút thì cập nhật lại keyword
      handleSearchChange(e) {
        const value = e.target.value;
        var lowerCaseName = value.toLowerCase();
        this.setState({keyword: lowerCaseName});
    
      }
    
      // khi enter thì sẽ gửi đi
      handleSubmit(e) {
         e.preventDefault();
        this.setState({redirect: true});
     }
    
    render() {
        const { redirect, keyword } = this.state;

        if (redirect) {
          return <Redirect to={`/search/${keyword}`} />;
        
        }
      
        return (
            <div>
              <form id="search-site"    onSubmit={this.handleSubmit}>
			<input  onChange={this.handleSearchChange} class="topinput" id="search-keyword" placeholder="Bạn tìm gì..."  maxlength="50" />
        	<button class="btntop" 
				aria-label="tìm kiếm">
                       <a
                  href={`/search/${keyword}`}
                />
				<i class="icontgdd-topsearch"></i>
			</button>
		</form>  
            </div>
        );
    }
}

export default Seach;