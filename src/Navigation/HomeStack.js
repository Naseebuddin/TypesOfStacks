import navigationString from "./navigationString";
import * as Screens from "../Screens";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.HOME}
        component={Screens.Home}
        options={{ headerShown: false }}
      />
  
    </>
  );
}
