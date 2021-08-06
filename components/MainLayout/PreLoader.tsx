/* React Module */
import { Children, Component, CSSProperties } from "react";

/* External Module */
import { motion } from 'framer-motion'

interface IReciept {
    id?: string,
    style?: CSSProperties
}

class PreLoader extends Component<IReciept> {

    render() {
        const { id, style, children } = this.props
        return <>
            <motion.div className="centerContain"
                id={id || ''}
                style={style}
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