import React, { createContext, useState } from "react";
import { useAuth } from "@/shared/hooks/useAuth";

const PuchaseContext = createContext<null>(null);

export const PurchaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [purchasedCourses, setPurchaseCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { currentUser } = useAuth();

  console.log(currentUser, "current user");

  // fetch user's purchased courses
  const fecthPurchasedCourses = async () => {
    if (!currentUser) {
      setLoading(false);
      setPurchaseCourses([]);
      return;
    }

    try {
    } catch (error) {}
  };
  return (
    <PuchaseContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </PuchaseContext.Provider>
  );
};
