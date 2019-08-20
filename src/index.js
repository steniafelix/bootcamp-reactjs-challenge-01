import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

import "./style.scss";

class App extends Component {
  state = {
    users: [
      {
        img: "https://minilua.com/wp-content/uploads/2011/03/lisasimpson.jpg",
        name: "Elisabeth Marie Simpson",
        time: "há 3 min",
        mensage:
          "Lisa é conhecida por sua inteligência acima da média. No desenho, ela representa uma criança de 08 anos, vegetariana, e que tem como grande ídolo, o saxofonista Murphy Gengivas Sangrentas."
      },
      {
        img:
          "https://minilua.com/wp-content/uploads/2011/03/tumblr_lh14cpEsXz1qh9njqo1_400.jpg",
        name: "Homer Simpson",
        time: "há 7 min",
        mensage:
          "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta."
      },
      {
        img:
          "https://minilua.com/wp-content/uploads/2011/03/imagemdobartsimpson.jpg",
        name: "Bartolomew Jojo Simpson",
        time: "há 10 min",
        mensage:
          "Bart é um garoto de 10 anos de idade. No desenho, ele representa o típico pré-adolescente americano, propenso a realizar brincadeiras e travessuras por onde passa. Entre seus passatempos, destaque por sua predileção pelo skate, além dos trotes realizados para o bar de Moe Szylak. Ainda no desenho, ele conta com o suporte de Milhouse Van Houten, seu melhor amigo."
      },
      {
        img: "https://minilua.com/wp-content/uploads/2011/03/Maggie.jpg",
        name: "Margareth Simpson",
        time: "há 12 min",
        mensage:
          "Maggie é a filha mais nova do casal Simpson. Carismática, a personagem é sempre vista portando sua inseparável chupeta."
      },
      {
        img: "https://minilua.com/wp-content/uploads/2011/03/margesimpson.jpg",
        name: "Marjorie Bouvier Simpson",
        time: "há 12 min",
        mensage:
          "Poucos sabem, mas o nome da personagem, faz referência direta a Marge Groening, mãe do criador da série, Matt Groening. Na animação, ela é conhecida por seu temperamento peculiar, e por seus longo cabelo azul. Entre suas atividades, destaque para os cuidados com a casa e com os filhos."
      }
    ]
  };

  render() {
    return (
      <div className="body">
        <Header />
        <PostList users={this.state.users} />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
