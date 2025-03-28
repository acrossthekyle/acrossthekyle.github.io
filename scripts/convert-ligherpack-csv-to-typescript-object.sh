#!/bin/zsh

input=$1
output="src/pages/api/_database/packs"
i=0

function cleanName {
  item=$(echo "$1" | tr '[:upper:]' '[:lower:]')
  item=$(echo "$item" | sed 's/[^[:alnum:]]/-/g')
  item=$(echo "$item" | sed 's/[^[:alnum:]]*$//')
  item=$(echo "$item" | sed 's/---/-/g')
  item=$(echo "$item" | sed 's/--/-/g')
  item=$(echo "$item" | sed 's/º//g')

  echo "$item"
}

if [ ! -d "$output/closet" ]
then
  mkdir -p "$output/closet"
fi

downloads="/Users/acrossthekyle/Downloads/"
filename="${input/$downloads/}"
filename="${filename/.csv/}"

pack=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
pack=$(echo "$pack" | sed 's/_/-/g')
pack="${pack}.ts"

imports=""
items="const items = [\n"

cat $input | while IFS=',' read -r name category description quantity weight unit link price worn consumable
do
  if [ ! $i -eq 0 ]
  then
    item=$(cleanName "$name $description")

    if [[ ! "$name" == *"$filename"* && ! "$name" == *"Item Name"* ]]
    then
      component=$(cleanName $name)
      component=$(echo $component | perl -pe 's/-(.)/\u$1/g')

      if [[ "$worn" == *"Worn"* ]]
      then
        component="${component}Worn"
      fi

      imports="${imports}import $component from './closet/$item';\n"
      items="${items}  ${component},\n"

      if [ ! -f "$output/closet/$item.ts" ]
      then
        echo "const item = {
  category: '$(echo "$category" | tr '[:upper:]' '[:lower:]')',
  consumable: $([[ "$consumable" == *"Consumable"* ]] && echo "true" || echo "false"),
  link: '$link',
  name: '$description',
  type: '$name',
  weight: $weight,
  worn: $([[ "$worn" == *"Worn"* ]] && echo "true" || echo "false"),
};

export default item;" > "$output/closet/$item.ts"
      fi
    fi
  fi

  ((i++))
done

items="${items}];\n"

if [ ! -f "$output/$pack" ]
then
  echo "$imports\n$items\nexport default items;" > "$output/$pack"
fi
