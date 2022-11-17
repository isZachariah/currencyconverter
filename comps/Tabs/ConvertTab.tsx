import {FC, useState} from "react";
import {Convert, options} from "./Convert";
import {Table} from "./Table";

type ConvertProps = {

}

export const ConvertTab: FC<ConvertProps> = (props) => {
    const [base, setBase] = useState<typeof options[0]>(options[0])
    const [target, setTarget] = useState<typeof options[0]>(options[0])
    const [conversionRate, setConversionRate] = useState(0)
    const [converting, setConverting] = useState(false)

    return (
        <div className={''}>
            <div>
                {
                    <Convert  base={base} setBase={setBase}
                              target={target} setTarget={setTarget}
                              conversionRate={conversionRate} setConversionRate={setConversionRate}
                              converting={converting} setConverting={setConverting}
                    />
                }
            </div>
            <div>
                <div className='w-3/5 mx-auto grid grid-cols-2 justify-center align-middle'>
                    <div>
                        {
                            converting && <Table
                                              base={base}
                                              target={target}
                                              conversionRate={conversionRate}
                                              direction={true}
                            />
                        }
                    </div>
                    <div>
                        {
                            converting && <Table
                                              base={target}
                                              target={base}
                                              conversionRate={conversionRate}
                                              direction={false}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}