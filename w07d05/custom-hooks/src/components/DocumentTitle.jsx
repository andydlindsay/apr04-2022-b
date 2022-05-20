import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'Our Awesome Site';

  useDocumentTitle(title);

  return (
    <div>
      <h2>Document Title</h2>
    </div>
  );
};

export default DocumentTitle;
