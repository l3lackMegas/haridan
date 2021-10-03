/* React Module */
import React, { Component } from "react";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

interface ResumeStructure {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    describe?: string | Array<string>
}

interface IReciept {
    title: string
    data?: Array<ResumeStructure> | any
}

class Resume extends Component<IReciept> {

    render() {

        const { title, data } = this.props;

        return <>
            <ColumnResume title={title}>
                { data.map((ctx: ResumeStructure, i: number)=>{
                    return <CardInfo
                        key={i}
                        title={ctx.title}
                        date={ctx.date}
                        org={ctx.org}
                        link={ctx.link}
                    >
                        {ctx.describe && typeof(ctx.describe) == "string" &&
                            <p>{ctx.describe}</p>
                        }

                        {ctx.describe && typeof(ctx.describe) == "object" &&
                            ctx.describe.map((dItem, index)=>{
                                return <p key={index}>{dItem}</p>
                            })
                        }
                    </CardInfo>
                })}
            </ColumnResume>
        </>
    }

}

export default Resume;