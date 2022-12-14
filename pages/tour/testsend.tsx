import { useState } from "react";
import { init, send } from "@emailjs/browser";

const TestSend = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if ("jHS6fn0zkggFkqJa3" && "service_c433m1l" && "template_qa4nxwi") {
      init("jHS6fn0zkggFkqJa3");
      const params = {
        to_name: name,
      };

      try {
        await send("service_c433m1l", "template_qa4nxwi", params);
        alert("成功");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">名前</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>送信</button>
    </form>
  );
};
export default TestSend;
