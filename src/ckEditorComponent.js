import React, { Component } from 'react'
import CKEditor from "react-ckeditor-component";



const heightVar = window.innerHeight - 190;
const toolbarConfig = {
  height: heightVar,
  toolbar: 'Full',
  allowedContent: true,
  startupFocus: true,
  // toolbarGroups: [
  //   { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
  //   { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
  //   { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
  //   { name: 'forms', groups: [ 'forms' ] },
  //   { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
  //   { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
  //   { name: 'links', groups: [ 'links' ] },
  //   { name: 'insert', groups: [ 'insert' ] },
  //   { name: 'styles', groups: [ 'styles' ] },
  //   { name: 'colors', groups: [ 'colors' ] },
  //   { name: 'tools', groups: [ 'tools' ] },
  //   { name: 'others', groups: [ 'others' ] },
  //   { name: 'about', groups: [ 'about' ] }
  // ],
  // removeButtons: 'PasteFromWord,Image,Source,Save,NewPage,Preview,Templates,Cut,Copy,Paste,PasteText,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Link,Unlink,Anchor,Flash,Smiley,SpecialChar,PageBreak,Iframe,Styles,Maximize,ShowBlocks,About,Language',
  // removePlugins: 'elementspath',
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      content: 'content',
    }
  }


  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }

  

  render() {
    return (
      <div>
        {this.state.content}
        <CKEditor
          activeClass="p10"
          config={toolbarConfig}
          content={this.state.content}
          events={{
            "blur": this.onBlur,
            "afterPaste": this.afterPaste,
            "change": this.onChange
          }}
        />
      </div>
    )
  }
}