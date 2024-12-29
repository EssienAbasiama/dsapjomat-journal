import apiClient from "./apiClient";

// Function to save the manuscript as a draft
export const saveManuscriptDraft = async (manuscriptData) => {
  try {
    console.log("Manuscript Data", manuscriptData);
    const response = await apiClient.post("/manuscripts", manuscriptData);

    if (response.status === 200 || response.status === 201) {
      console.log("Draft saved successfully");
      return { success: true };
    } else {
      console.error(
        "Failed to save draft:",
        response.data?.message || "Unknown error"
      );
      return {
        success: false,
        error: response.data?.message || "Failed to save draft",
      };
    }
  } catch (error) {
    console.error(
      "Error saving draft:",
      error.response?.data?.message || error.message
    );
    return {
      success: false,
      error: error.response?.data?.message || error.message,
    };
  }
};
