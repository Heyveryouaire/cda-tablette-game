import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { APIfunctions } from "./../api/APIfunctions";

const ListGamesScreen = ({ navigation }) => {
  const [games, setGames] = useState();

  useEffect(() => {
    APIfunctions("http://localhost:8000/Games")
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((error) => {
        setGames([
          {
            id: "2154+5eg21354g",
            title: "Quizz",
            paragraphe:
              "Skywalker tusken raider alderaan organa. Amidala thrawn endor kessel. Kenobi skywalker naboo darth. Mon biggs moff fisto antilles padmé jade. Fett yoda wicket kit secura. Biggs yoda skywalker kashyyyk luuke lando moff yavin c-3po. Solo dantooine mandalore ewok alderaan jar luke. Maul antilles mon organa hutt ben. ",
          },
          {
            id: "2154+5eg2166g",
            title: "Le Labyrinthe",
            paragraphe:
              "Skywalker tusken raider alderaan organa. Amidala thrawn endor kessel. Kenobi skywalker naboo darth. Mon biggs moff fisto antilles padmé jade. Fett yoda wicket kit secura. Biggs yoda skywalker kashyyyk luuke lando moff yavin c-3po. Solo dantooine mandalore ewok alderaan jar luke. Maul antilles mon organa hutt ben. ",
          },
          {
            id: "2154742g21354g",
            title: "Geomètre",
            paragraphe:
              "Skywalker tusken raider alderaan organa. Amidala thrawn endor kessel. Kenobi skywalker naboo darth. Mon biggs moff fisto antilles padmé jade. Fett yoda wicket kit secura. Biggs yoda skywalker kashyyyk luuke lando moff yavin c-3po. Solo dantooine mandalore ewok alderaan jar luke. Maul antilles mon organa hutt ben. ",
          },
          {
            id: "2154+57777354g",
            title: "Candenas",
            paragraphe:
              "Skywalker tusken raider alderaan organa. Amidala thrawn endor kessel. Kenobi skywalker naboo darth. Mon biggs moff fisto antilles padmé jade. Fett yoda wicket kit secura. Biggs yoda skywalker kashyyyk luuke lando moff yavin c-3po. Solo dantooine mandalore ewok alderaan jar luke. Maul antilles mon organa hutt ben. ",
          },
          {
            id: "2111115eg21354g",
            title: "Terminus",
            paragraphe:
              "Skywalker tusken raider alderaan organa. Amidala thrawn endor kessel. Kenobi skywalker naboo darth. Mon biggs moff fisto antilles padmé jade. Fett yoda wicket kit secura. Biggs yoda skywalker kashyyyk luuke lando moff yavin c-3po. Solo dantooine mandalore ewok alderaan jar luke. Maul antilles mon organa hutt ben. ",
          },
        ]);
        console.log(error);
      });
  }, []);

  const Item = ({ item }) => (
    <View style={style.container}>
      <View style={{ flexDirection : 'row', alignItems: 'center', justifyContent:'space-between', marginBottom: 5,}}>
        <Text style={style.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("gamesDetails", { game: item})}
          style={style.button}
        >
          <Text style={{ color: "#fff", fontSize: 12 }}>En savoir plus</Text>
        </TouchableOpacity>
      </View>

      <Text style={style.paragraphe}>{item.paragraphe}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor : 'black'}}>
      <ScrollView style={style.flatList}>
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ScrollView= {false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  flatList: {
    backgroundColor: "black",
    width: "50%",
    margin: "auto",
  },
  title: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#EB5757",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraphe: {
    color: "#FFF",
    fontSize: 12,
  },
  container: {
    borderWidth: 3,
    borderColor: "#EB5757",
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
});

export default ListGamesScreen;
