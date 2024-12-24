import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Return null if there’s an error
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  // Handle case where data is null or not found
  if (!data) {
    return <div className={styles.error}>Post not found!</div>;
  }

  const { title, user, img, desc } = data;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.user}>
            {user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={user.image} alt="User Avatar" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{user?.name || "Anonymous"}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {img && (
          <div className={styles.imageContainer}>
            <Image src={img} alt="Post Image" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
