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
      numero: 0,
      botao: "Start",
      ultimo: null,
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "Start" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ botao: "Pausar" });
    }
  }

  stop() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: "Start",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          saource={require("./src/assets/cronometro.png")}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.start}>
            <Text style={styles.btnTexto}> {this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.stop}>
            <Text style={styles.btnTexto}> Stop</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0
              ? "Último tempo: " + this.state.ultimo.toFixed(2)
              : " "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },

  timer: {
    marginTop: -160,
    color: "#FFF",
    fontSize: 65,
    fontWeight: "bold",
  },

  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },

  botao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 20,
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },

  areaUltimo: {
    marginTop: 40,
  },

  textoCorrida: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#FFF",
  },
});

export default App;
