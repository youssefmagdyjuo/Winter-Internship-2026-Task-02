import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
    return (
        <div>
            <section className="heroSection">
                <div className="heroContent">
                    <h1>Welcome to Shopifay</h1>
                    <p>Your one-stop shop for all your needs. Discover a wide range of products at unbeatable prices.</p>
                    <div className="w-40">
                        <Link to="/products">
                            <Button style={'btn-primary'}>
                                <div className="flex gap-2 items-center justify-center">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <span>Buy Now</span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
