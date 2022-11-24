
// layoutコンポーネントテスト用 消してOK
import Layout from "../component/layout";
import styles from "../styles/layout.module.scss";
const Test = () => {
  return (
    <Layout>
        <div className={styles.qwerty}>aaa</div>
    </Layout>
  )
};
export default Test;
