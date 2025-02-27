import { Select } from "antd";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";
import { useTranslation } from "react-i18next";

function SearchCollections({ setInputValue }) {
	const { Option } = Select;
	const { chainId } = useMoralisDapp();
	const NFTCollections = getCollectionsByChain(chainId);
	const { t } = useTranslation("navbar");

	function onChange(value) {
		setInputValue(value);
	}

	return (
		<>
			<Select showSearch style={{ width: "1000px", marginLeft: "20px", padding: "30px auto" }} placeholder={t("navbar:findACollection")} optionFilterProp="children" onChange={onChange}>
				{NFTCollections &&
					NFTCollections.map((collection, i) => (
						<Option value={collection.addrs} key={i}>
							{collection.name}
						</Option>
					))}
			</Select>
		</>
	);
}
export default SearchCollections;
