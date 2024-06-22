import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import CurrencyButton from "../components/CurrencyButton";
import { Currency } from "../src/constant";
import FlashMessage, { showMessage } from "react-native-flash-message";
// import {Snackbar} from 'react-native-snackbar';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const buttonPressed = (targetValue) => {
    if (!inputValue) {
      // Handle case where inputValue is empty
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 💰`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "NOt a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Input section */}
        <View style={styles.rupeesContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxFontSizeMultiplier={14}
              keyboardType="number-pad"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter amount in rupees"
            />
          </View>
          {resultValue ? (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          ) : null}
        </View>

        {/* Currency selection section */}
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={Currency}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  targetCurrency === item.name && styles.selected,
                  styles.button,
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton Currency={item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#515151",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  resultTxt: {
    fontSize: 32,
    marginTop: 30,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: "#f0932b",
    fontWeight: "800",
  },
  rupee: {
    marginRight: 8,
    fontSize: 28,
    color: "#000000",
    fontWeight: "600",
  },
  rupeesContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  inputAmountField: {
    height: 40,
    width: 160,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  bottomContainer: {
    width: "100%",
  },
  button: {
    flex: 1,
    margin: 12,
    width: 100,
    height: 100, // Adjusted height for buttons
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  selected: {
    backgroundColor: "#ffeaa7",
  },
});
