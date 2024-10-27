// @ts-nocheck

import { useEffect, useState } from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { IPost } from "@/types";
import { parseHtmlContent } from "@/utils";
import { format } from "date-fns";

interface IProps {
  blog: IPost;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  coverPage: {
    padding: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 25,
  },
  blogTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333333",
  },
  coverAuthorDate: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    objectFit: "cover",
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
    marginBottom: 10,
  },
  author: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  category: {
    fontSize: 12,
    color: "#444",
    fontStyle: "italic",
    backgroundColor: "#ececec",
    borderRadius: 4,
    padding: "2px 10px",
  },
  content: {
    fontSize: 13,
    lineHeight: 1.5,
    color: "#333",
    textAlign: "justify",
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#ececec",
    borderRadius: 4,
    padding: "4px 10px",
    margin: "3px",
    fontSize: 10,
    color: "#333",
  },
});

const fetchImageAsBase64 = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const BlogDocument = ({ blog }: IProps) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blog?.coverImage) {
      fetchImageAsBase64(blog.coverImage)
        .then((data) => {
          setImageData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
          setImageData(null);
          setIsLoading(false);
        });
    }
  }, [blog?.coverImage]);

  const formattedDate = blog?.createdAt
    ? format(new Date(blog.createdAt), "MMMM dd, yyyy")
    : "Unknown date";

  if (isLoading) {
    return (
      <div>
        <Document>
          <Page>
            <Text>Loading...</Text>
          </Page>
        </Document>
      </div>
    );
  }

  if (!imageData) {
    return (
      <div>
        <Document>
          <Page>
            <Text>Error loading image. Please try again later.</Text>;
          </Page>
        </Document>
      </div>
    );
  }

  return (
    <>
      <Document>
        {/* Cover Page */}
        <Page size="A4" style={styles.coverPage}>
          <Image src="/tech-tips-hub-logo.png" style={styles.logo} />
          <Text style={styles.blogTitle}>{blog?.title || "Untitled"}</Text>
          <Text style={styles.coverAuthorDate}>
            By {blog?.author?.fullName || "Unknown"} • {formattedDate}
          </Text>
        </Page>

        {/* Main Content Page */}
        <Page size="A4" style={styles.page}>
          {/* Cover Image */}
          <View>
            <Image src={imageData} style={styles.image} />
          </View>

          {/* Title */}
          <Text style={styles.title}>{blog?.title || "Untitled"}</Text>

          {/* Author and Date */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "15px",
              alignItems: "center",
              gap: "0px 10px",
            }}
          >
            <Text style={styles.author}>
              By {blog?.author?.fullName || "Unknown"}
            </Text>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.category}>
              {blog?.category?.name || "Uncategorized"}
            </Text>
          </View>

          {/* Content */}
          <Text style={styles.content}>
            {blog?.contentType === "html"
              ? parseHtmlContent(blog?.content || "")
              : blog?.content || "No content available."}
          </Text>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            {Array.isArray(blog?.tags) && blog.tags.length > 0 ? (
              blog.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))
            ) : (
              <Text>No tags available.</Text>
            )}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default BlogDocument;
