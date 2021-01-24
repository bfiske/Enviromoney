import React from 'react'

export default function NewImage(props) {
    return (
        <Image style={styles.image} source={props.imageName} />
    );
  }