"use client";

import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="px-8 py-4 sm:px-16 bg-stone-900 text-white flex items-start sm:items-center gap-10 justify-between">
      <div>
        <Logo className="w-auto h-auto" />
      </div>

      <div className="text-sm">
        &copy; تمامی حقوقات مادی و معنوی این سایت محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
