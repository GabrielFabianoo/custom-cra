import { ContainerHome, NavHome } from "./styled";

const Home = () => {
  return (
    <>
      <NavHome></NavHome>
      <ContainerHome>
        <h1>Welcome to Gabriel Fabiano custom-cra</h1>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              marginRight: "5px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://github.com/GabrielFabianoo"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Github</h2>
              <img
                src="https://img.icons8.com/dusk/80/000000/github.png"
                alt="Github"
              />
            </a>
          </div>
          <div
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "5px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/gabrielfabianoo/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>LinkedIn</h2>

              <img
                src="https://img.icons8.com/plasticine/100/000000/linkedin.png"
                alt="LinkedIn"
                style={{ height: "80px" }}
              />
            </a>
          </div>
        </div>
      </ContainerHome>
    </>
  );
};

export default Home;
