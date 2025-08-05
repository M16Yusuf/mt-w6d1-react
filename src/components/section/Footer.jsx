function Footer() {
  return (
    <footer className="flex flex-row w-full gap-5 bg-gray-300 p-2.5 justify-center">
      <section className="flex flex-col">
        <div className="font-bold">Muhammmad Yusuf</div>
        <div>Koda Batch 3</div>
      </section>
      <section>
        <a
          className="flex flex-row gap-2.5 items-center border border-black rounded-md p-2.5 cursor-pointer hover:bg-gray-600"
          href="https://www.linktr.ee/m16yusuf"
          target="_blank"
        >
          <img
            className="w-5 h-5"
            src="/linktree-logo-icon.svg"
            alt="linktree_icon"
          />
          <label>m16Yusuf</label>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
