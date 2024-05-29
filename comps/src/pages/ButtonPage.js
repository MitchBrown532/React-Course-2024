import { GoBell, GoCloudOffline, GoArrowDown } from 'react-icons/go'
import Button from "../components/Button"


function ButtonPage() {
    const handleClick = () => {
        console.log("Clicked!!!")
    }

    return (
        <div>
            <div>
                <Button onClick={handleClick} rounded outline>
                    <GoCloudOffline />
                    Standard
                </Button>
            </div>
            <div>

                <Button primary rounded outline>
                    <GoBell />
                    primary
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoArrowDown />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success outline>Success</Button>
            </div>
            <div>
                <Button danger>danger </Button>
            </div>
            <div>
                <Button warning> warning </Button>
            </div>
        </div>
    )
}

export default ButtonPage