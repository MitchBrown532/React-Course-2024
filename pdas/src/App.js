import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import 'bulma/css/bulma.css'


function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description = "Alexa is a stalker"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@Cortana32" 
                            image={CortanaImage}
                            description = "Cortana is also a stalker"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri"
                            handle="@Siri01"
                            image={SiriImage}
                            description = "Siri is kinda cool (jk, she's a stalker too)"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;