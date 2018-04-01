import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { ModalTrigger } from '../../actions/index';
const customStyles = {
 content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 700
 }
};

class ModalApp extends Component {
 render() {
  const { isModalOpen, ModalTrigger, buttonInline, buttonClass } = this.props;
  return (
   <div>
    <button
     className={`${buttonClass}`}
     style={{ buttonInline }}
     onClick={() => ModalTrigger(true)}
    >
     Open Modal
    </button>
    <Modal
     isOpen={isModalOpen}
     style={customStyles}
     contentLabel="Modal"
     ariaHideApp={false}
     onRequestClose={() => ModalTrigger(false)}
    >
     {this.props.children}
    </Modal>
   </div>
  );
 }
}
function mapStateToProps({ isModalOpen }) {
 return { isModalOpen };
}
export default connect(mapStateToProps, { ModalTrigger })(ModalApp);
