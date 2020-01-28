

import ReactDOM from 'react-dom'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCaretDown, faExternalLinkAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;

library.add(fab, faCaretDown, faExternalLinkAlt, faEnvelope, faCheckSquare, faCoffee);
