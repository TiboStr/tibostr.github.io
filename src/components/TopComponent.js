import {BsGithub, BsLinkedin} from "react-icons/bs";

function TopComponent() {

    return <>
        <div className={"TopComponent"}
             style={{
                 height: "100vh",
                 display: "flex",
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "center",
                 color: "whitesmoke"
             }}>


            <div style={{
                height: "fit-content"
            }}>
                <div>

                    <div style={{fontSize: "1.1em", fontStyle: "italic", width: "fit-content", margin: "auto auto"}}>
                        Hi <span className={"waving-hand"}>👋</span>, I'm
                    </div>
                    <div style={{
                        fontStyle: "bold",
                        fontSize: "3em",
                        marginLeft: "auto",
                        marginRight: "auto",
                        margin: "auto auto",
                        width: "fit-content"
                    }}>
                        <span style={{fontSize: "0.7em"}}>―</span> Tibo Stroo <span style={{fontSize: "0.7em"}}>―</span>
                    </div>
                    <div style={{fontSize: "1.4em"}}>
                        Computer Science student at Ghent University
                    </div>
                </div>

            </div>
            <div style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin: "1%",
                alignSelf: "flex-end",
                justifySelf: "end"
            }}>

                <div className={"scroll-down"} style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    justifySelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                >
                    <a href="#about" style={{all: "inherit"}}>
                        scroll
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="arrow-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                        </div>
                    </a>
                </div>
                <div style={{width: "90px", alignSelf: "flex-end"}}>
                    <a href="https://www.linkedin.com/in/tibostroo/" target="_blank" rel="noreferrer">
                        <BsLinkedin className={"social"} size={32}/>
                    </a>

                    <a href="https://github.com/TiboStr" target="_blank" rel="noreferrer">
                        <BsGithub className={"social"} size={32}/>
                    </a>
                </div>
            </div>
        </div>

    </>
}

export default TopComponent;
