export function downloadBase64PngBlob(base64: string, filename = "image.png") {
  const cleanedBase64 = base64.replace(/^data:image\/png;base64,/, "");
  const byteCharacters = atob(cleanedBase64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([new Uint8Array(byteNumbers)], {
    type: "image/png",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

export const formatNaira = (value: number): string => {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1_000_000_000) {
    const billions = absValue / 1_000_000_000;
    return `${sign}₦${billions.toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (absValue >= 1_000_000) {
    const millions = absValue / 1_000_000;
    return `${sign}₦${millions.toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (absValue >= 1_00_000) {
    const thousands = absValue / 1000;
    return `${sign}₦${thousands.toFixed(1).replace(/\.0$/, "")}K`;
  }

  const formatted = absValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return `${sign}₦${formatted}`;
};

export function getDiceBearAvatar(
  firstName: string,
  lastName: string,
  gender: "male" | "female" | "any" = "any"
) {
  const seed = `${firstName || ""} ${lastName || ""}`.trim();
  if (!seed) return `https://api.dicebear.com/9.x/adventurer/svg`;

  const style = gender === "any" ? "adventurer-neutral" : "adventurer";
  const genderParam = gender === "any" ? "" : `&gender=${gender}`;

  return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodeURIComponent(
    seed
  )}${genderParam}`;
}

export const formatDollar = (value: number): string => {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1_000_000_000) {
    const billions = absValue / 1_000_000_000;
    return `${sign}$${billions.toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (absValue >= 1_000_000) {
    const millions = absValue / 1_000_000;
    return `${sign}$${millions.toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (absValue >= 1_00_000) {
    const thousands = absValue / 1000;
    return `${sign}$${thousands.toFixed(1).replace(/\.0$/, "")}K`;
  }

  const formatted = absValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return `${sign}$${formatted}`;
};

export const formatNumber = (value: number): string => {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1_000_000_000) {
    const billions = absValue / 1_000_000_000;
    return `${billions.toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (absValue >= 1_000_000) {
    const millions = absValue / 1_000_000;
    return `${millions.toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (absValue >= 1_00_000) {
    const thousands = absValue / 1000;
    return `${thousands.toFixed(1).replace(/\.0$/, "")}K`;
  }

  const formatted = absValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return `${formatted}`;
};
