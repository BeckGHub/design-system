/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let AttachmentLink = props =>
  <a href="javascript:void(0);" className="slds-media slds-box slds-grow slds-text-link--reset">
    <div className="slds-media__figure slds-medium-show">
      <div className="slds-file slds-size--small">
        <div className="slds-file__crop slds-file__crop--16-by-9">
          <img src="/assets/images/placeholder-img@16x9.jpg" alt={ props.title || 'Image Title' } />
        </div>
      </div>
    </div>
    <div className="slds-media__body">
      <h3 className="slds-text-heading--small">{ props.articleTitle || 'Article Title' }</h3>
      <p>{ props.articleDescription || 'Article Description' }</p>
      <span className="slds-text-body--small">{ props.articleTitle || 'http://www.linkurl.com' }</span>
    </div>
  </a>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <AttachmentLink
    articleTitle="Maui By Air The Best Way Around The Island"
    articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  />
);