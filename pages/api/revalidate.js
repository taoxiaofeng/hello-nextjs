/**
 * 重新生成页面示例：http://localhost:3000/api/revalidate?secret=aaaaaa&postId=2
 */

export default async function handler(req, res) {
  if (req.query.secret !== "aaaaaa") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(`/posts/${req.query.postId}`)
    return res.json({ revalidated: true })
  } catch (error) {
    return res.status(500).send("Error revalidating data")
  }
}
