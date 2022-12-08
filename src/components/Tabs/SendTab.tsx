import {FC} from "react";
import {Select} from "../Inputs/Select";

type SendProps = {

}

export const SendTab: FC<SendProps> = (props) => {
    return (
        <div className={''}>
            <div className={'bg-white mx-auto rounded-lg flex flex-col shadow-lg'}>
                <form>
                    <label>You Send</label>
                </form>
            </div>
        </div>
    )
}