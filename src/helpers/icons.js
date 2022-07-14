import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faLocationDot, faEnvelope, faMapLocationDot, faLock } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faLocationDot, faEnvelope, faMapLocationDot, faLock);
}

export default Icons;