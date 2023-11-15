import { useRouter } from "next/router";
import styles from "./index.module.css";
import _ from "lodash";
/**
 * 使用next/image组件需要注意的问题：
 * 1. 需要在next.config.js中配置images属性，否则会报错
 * 2.https://www.nextjs.cn/docs/basic-features/image-optimization
 */
import Image from 'next/image'

const Post = ({ data }) => {
  console.log(`图片地址：${data?.sprites?.other['official-artwork']?.front_default}`)
  return (
    <div className={styles.container}>
      <h2>{data?.name || '未查询到'}</h2>
      <div>height: {data?.height || '未知1'}</div>
      <div>weight: {data?.weight || '未知'}</div>
      <div>
        <Image src={data?.sprites?.other['official-artwork']?.front_default} alt={'pokemon pic'} width={400} height={400} />
      </div>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((data) => data.json());

  return {
    props: {
      data: res,
    },
    revalidate: 10, // 10秒更新一次
  };
}

// 用来枚举用户有可能访问到的id
export async function getStaticPaths() {
  return {
    paths: _.range(1, 100).map((id) => ({ params: { id: `${id}` } })),
    // fallback: "blocking",
    fallback: false,
  };
}
