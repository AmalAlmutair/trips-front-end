// import {
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Keyboard,
//   Platform,
//   TouchableWithoutFeedback,
//   Image,
//   Button,
// } from "react-native";
// import {
//   Button,
//   Box,
//   VStack,
//   Heading,
//   FormControl,
//   Center,
//   Input,
// } from "native-base";
// import { values } from "mobx";
// import tripStore from "../../stores/tripStore";

// import React, { useState, useEffect } from "react";

// import * as ImagePicker from "expo-image-picker";

// const TripCreate = ({ navigation }) => {
//   const [trip, setTrip] = useState({
//     title: "",
//     description: "",
//     image: "",
//     catogary: ",",
//   });

//   const handleSubmit = () => {
//     tripStore.tripCreate(trip);
//   };

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <Center w="100%">
//         <Box safeArea p="2" w="90%" maxW="290" py="8">
//           <Heading
//             size="lg"
//             color="coolGray.800"
//             _dark={{
//               color: "warmGray.50",
//             }}
//             fontWeight="semibold"
//           >
//             Create Your Amazing Trip
//           </Heading>

//           <VStack space={3} mt="5">
//             <FormControl>
//               <FormControl.Label>Trip Title</FormControl.Label>
//               <Input
//                 onChangeText={(value) => {
//                   setTrip({ ...trip, title: value });
//                 }}
//               />
//             </FormControl>
//             <FormControl>
//               <FormControl.Label>Trip Description</FormControl.Label>
//               <Input
//                 onChangeText={(value) => {
//                   setTrip({ ...trip, description: value });
//                 }}
//               />
//             </FormControl>
//             <FormControl>
//               <FormControl.Label>Trip Catogery</FormControl.Label>
//               <Input
//                 onChangeText={(value) => {
//                   setTrip({ ...trip, catogary: value });
//                 }}
//               />
//             </FormControl>
//             <FormControl>
//               <FormControl.Label>Trip Picture</FormControl.Label>

//               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {Image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//             </FormControl>
//             <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
//               Submite Your Trip
//             </Button>
//           </VStack>
//         </Box>
//       </Center>
//     </TouchableWithoutFeedback>
//   );
// };

// export default TripCreate;

// const styles = StyleSheet.create({});
