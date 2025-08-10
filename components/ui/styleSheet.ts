import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  // Header Styles
  header: {
    backgroundColor: colors.headerColor,
    alignItems: "center",
    // paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    flex: 1,
    maxHeight: 50,
  },
  headerIconContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 0.9,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textLight,
  },
  // Header add icon style
  headerAddIcon: {
    color: colors.textLight,
    fontSize: 30,
  },

  // Text Styles
  textPrimary: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  // Card Styles
  card: {
    alignSelf: "center",
    backgroundColor: colors.cardBackground,
    width: "95%",
    height: 70,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    justifyContent: "center",
    flex: 2,
    flexDirection: "row",
  },

  // Text Container
  textContainer: {
    flex: 0.9,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  checkboxContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Button Styles
  buttonPrimary: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  // Status Styles
  todoComplete: {
    backgroundColor: colors.successColor,
  },
  todoPending: {
    backgroundColor: colors.warningColor,
  },
  todoUrgent: {
    backgroundColor: colors.errorColor,
  },
});
