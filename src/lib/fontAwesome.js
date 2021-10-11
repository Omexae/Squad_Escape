import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faUser, faCircleNotch } from "@fortawesome/free-solid-svg-icons"

// only import the used icons (for smaller bundles, thanks to tree-shaking)
library.add(faHome, faUser, faCircleNotch)

export { FontAwesomeIcon }