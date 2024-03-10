package twoSumTwo

func twoSum(numbers []int, target int) []int {
	left := 0
	right := len(numbers) - 1

	for numbers[left]+numbers[right] != target {
		if left >= len(numbers)-1 {
			break
		}
		if numbers[left]+numbers[right] < target {
			left++
		} else {
			right--
		}
	}

	if numbers[left]+numbers[right] == target {
		return []int{left, right}
	}

	return []int{}

}

func main() {
	numbers := []int{2, 4, 7, 9, 10, 11, 13, 16, 18, 20, 23}

	twoSum(numbers, 43)
}
