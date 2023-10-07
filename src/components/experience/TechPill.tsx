function TechPill(props: any) {
  return (
    <div className="m-1 w-max rounded-full bg-gray-200 px-2 pb-1 text-black hover:no-underline">
      {props.name}
    </div>
  );
}

export default TechPill;
