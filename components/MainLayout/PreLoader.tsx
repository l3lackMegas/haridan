/* React Module */
import { Children, Component } from "react";

/* External Module */
import { motion } from 'framer-motion'

interface IReciept {
    id: string
}

class PreLoader extends Component<IReciept> {

    render() {
        const { id, children } = this.props
        return <>
            <motion.div className="centerContain"
                id={id || ''}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <p style={{
                    padding: "5px 15px",
                    border: '1px rgba(255, 255, 255, .5) solid'
                }}>{children}</p>
            </motion.div>
        </>
    }

}

export default PreLoader;