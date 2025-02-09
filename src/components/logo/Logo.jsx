export default function Logo() { 
  return (
    <div className="flex flex-col justify-center items-center px-10 py-3 w-full max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea7072b7db4a4b2781c85bfcc6b9b4af7928913ed86a98c071ea4a56e0e2c30?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        alt="Company Logo"
        className="object-contain w-36 max-w-full aspect-[4.5] mb-2"
      />
    </div>
  );
}
