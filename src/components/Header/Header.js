
//    import "./Header.css";

//    function Header({ image, title, children }) {
//      return (
//        <header className="Header">
//          <img src={image} alt={title} />
//          <section>
//            <h1>{title}</h1>
//            <p>{children}</p>
//          </section>
//        </header>
//      );
//    }

//    export default Header;





import "./Header.css";

function Header({ image, title, children }) {
    return (
        <header>

            <div className="container" >
                <div className="tb">
                    <div className="nd">

                        <div className="img">
                            <h1>our pets</h1>
                            <p>Alternatively, a pet is there strictly as a companion. Different from a Farm Animal – A cow or a chicken living on a farm serves a specific purpose. A cow provides milk while a chicken lays eggs to be eaten or sold. ... One of the pros of choosing this pet is there are hundreds of breeds of dogs to choose from so it’s easy to find the right fit your household. Another pro is a dog can be a loyal companion that can guard your property as well. Many people appreciate the unconditional love offered by many pet dogs.. A person keeps animals in his house for communication and receiving positive emotions. Such domestic animals are thus contrasted with farm animals, which are kept for meat and dairy products, wool, etc. and as working cattle.</p>
                            <p>love your pets</p>
                        </div>
                        <div className="ourpets"></div>
                        <div className="our"></div>
                    </div>

                </div>

            </div>
            </header>
            );
  }
  export default Header;