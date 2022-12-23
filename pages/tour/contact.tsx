import Layout from "../../component/layout"
import Image from "next/image"
import styles from "../../styles/contact.module.css"

export default function Contact(){

    const onSubmit=()=>{

    }


    return (
        <>
        <Layout>
            <h1>お問合せ</h1>
            <div className={styles.flex}>
               
                <div>
                    <form onSubmit={onSubmit}>
                        <label>質問<br /><textarea  cols={50} rows={2}/></label><br />
                        <label>詳細<br /><textarea cols={100} rows={10}></textarea></label><br />
                        <button>送信</button>
                    </form>
                </div>
                <div>
                    <Image src={"/images/horse.png"} width={200} height={200} alt={"画像"} className={`${styles.keyframe0} ${styles.animation}`} ></Image>
                </div>
            </div>
        </Layout>
        </>
    )
}
