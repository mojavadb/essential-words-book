// use client
"use client";

import React from "react";
import { motion } from "framer-motion";

type ProgressProps = {
  completed: number; // مقدار فعلی طی شده
  total: number; // کل مقدار
  height?: number; // ارتفاع نوار (px) – اختیاری، پیش‌فرض 12
  showLabel?: boolean; // آیا درصد به صورت متن نمایش داده شود (پیش‌فرض true)
  className?: string; // کلاس اضافی برای کانتینر
};

export default function Progress({
  completed,
  total,
  height = 12,
  showLabel = true,
  className = "",
}: ProgressProps) {
  // محافظت در برابر مقادیر نامعتبر و محاسبه درصد به صورت دقیق و امن
  const safeTotal = Number.isFinite(total) && total > 0 ? total : 0;
  const safeCompleted = Number.isFinite(completed) ? completed : 0;

  // اگر total صفر باشد، درصد را 0 در نظر می‌گیریم (از تقسیم بر صفر جلوگیری می‌شود)
  const rawPercent = safeTotal === 0 ? 0 : (safeCompleted / safeTotal) * 100;

  // محدودسازی درصد بین 0 و 100
  const percent = Math.max(0, Math.min(100, rawPercent));

  // نمایش عددی با یک اعشار اگر لازم باشد، یا بدون اعشار برای اعداد صحیح
  const displayPercent =
    Math.abs(percent - Math.round(percent)) < 0.5
      ? String(Math.round(percent))
      : percent.toFixed(1);

  // برای نمایش جزئیات "x of y"
  const labelDetail =
    safeTotal === 0 ? `${safeCompleted}` : `${safeCompleted} از ${safeTotal}`;

  return (
    <div className={`w-full ${className}`}>
      {/* برچسب بالایی (اختیاری) */}
      {showLabel && (
        <div className="flex items-center justify-between mb-2 select-none">
          <div className="text-sm text-gray-600">پیشرفت</div>
          <div className="text-sm font-medium text-gray-800">
            {displayPercent}%{" "}
            <span className="text-xs text-gray-500">({labelDetail})</span>
          </div>
        </div>
      )}

      {/* کانتینر نوار */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        aria-label={`پیشرفت ${displayPercent} درصد`}
        tabIndex={0}
        className="w-full bg-gray-200 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        style={{ height }}
      >
        {/* نوار پر شده (انیمیشن با framer-motion) */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 140, damping: 20 }}
          className="h-full flex items-center justify-end rounded-full"
          style={{
            // گرادینت و سایه برای ظاهر زیبا
            background:
              "linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
            boxShadow: "0 4px 12px rgba(48, 65, 91, 0.12)",
          }}
        ></motion.div>
      </div>
    </div>
  );
}
