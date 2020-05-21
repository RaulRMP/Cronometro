import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("./src/assets/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      " A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
      "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
      "Siga os bons e aprenda com eles.",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
      "O bom-senso vai mais longe do que muito conhecimento.",
      "Quem quer colher rosas deve suportar os espinhos.",
    ];
  }

  quebraBiscoito() {
    let nAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '" ' + this.frases[nAleatorio] + '"',
      img: require("./src/assets/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btntexto}>Quebrar o biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },

  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#000080",
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btntexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000080",
  },
});

export default App;
