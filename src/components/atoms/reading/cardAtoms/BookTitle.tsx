import useStyle from "../../../../cardStyle";
interface propsType {
  title:string;
}
function BookTitle(props:propsType) {
  const styleclass = useStyle();
  return (
    <>
  
      <p className={styleclass.bookTitle}>{props.title}</p>
    </>
  );
}
export default BookTitle;
