import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './NeedHelp.css'

const needHelp = (props) => (
  <Modal
    show={props.show}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    dialogClassName="need-help__modal"
    onHide={props.onClose}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Help center</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>How can we help?</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque ex in sagittis feugiat. Sed finibus enim nulla, et pretium
        nulla pellentesque a. Vestibulum at dui nec nisi mollis facilisis. Etiam
        Etiam consequat tincidunt metus et accumsan. Suspendisse orci felis,
        fringilla ut quam ut, tincidunt hendrerit quam
      </p>
      <p>
        In mollis quam at augue gravida semper. Phasellus eu mollis arcu.
        consequat dapibus risus non varius. Phasellus ultrices enim quis lectus
        lectus dictum venenatis. Integer tincidunt turpis ac mi imperdiet
        pretium. Ut at tincidunt nunc. Donec consectetur ornare lacus quis
        feugiat.
      </p>
      <p>
        In mollis quam at augue gravida semper. Phasellus eu mollis arcu.
        consequat dapibus risus non varius. Phasellus ultrices enim quis lectus
        lectus dictum venenatis. Integer tincidunt turpis ac mi imperdiet
        pretium. Ut at tincidunt nunc. Donec consectetur ornare lacus quis
        feugiat.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
)

export default needHelp
