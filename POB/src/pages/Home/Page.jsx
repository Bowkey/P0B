import TabsComponent from "./TabsComponent.jsx";
import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@base-ui/react";
function Home() {




  return (

    <>
      <div className="flex justify-end bg-ne px-6 pt-2">

        <Button><Bell /></Button>
      </div>
      <TabsComponent />
    </>


  )
}

export default Home