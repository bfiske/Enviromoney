import React from "react";
import { Image } from "react-native";

export default function NewImage({ source }) {
    return (
        <Image source={{uri: source}} alt="Example" className="w-25 m-2" />
    );
  }
