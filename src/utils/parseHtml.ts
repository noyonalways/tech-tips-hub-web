export const parseHtmlContent = (html: string): string => {
  // Use regex to remove all HTML tags and leave only text content
  return html.replace(/<[^>]+>/g, "").trim();
};
